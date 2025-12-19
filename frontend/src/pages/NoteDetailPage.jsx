import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, Trash2Icon, LoaderIcon } from "lucide-react";
import { Link } from 'react-router'
import toast from 'react-hot-toast'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const  { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log('Failed To Fetch Note Data', error)
      } finally {
          setLoading(false)
      }
    };
    fetchNote();
  }, [id])

    const handleDelete = async () => {
      if(!window.confirm('Are you sure you want to delete this note?')) return;
      try {
        await api.delete(`/notes/${id}`);
        toast.success('Note Deleted Successfully!');
        navigate('/')
      } catch (error) {
        console.log('Failed to delete note', error);
        toast.error('Failed To Delete Note!')
      }
  }

    const handleSave = async () => {
      if(!note.title.trim() || !note.content.trim()) {
        toast.error('Please add a title or content!');
        return
      }

      setSaving(true);

    try {
      await api.put(`/notes/${id}`,note);
      toast.success('Note updated successfully!');
      navigate('/')
    } catch (error) {
      console.log('Error saving the note!', error);
      toast.error('Error Saving The Note!')
    } finally {
      setSaving(false)
    }
  }



  if (loading) {
      return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
          <LoaderIcon className="animate-spin size={40}"/>
        </div>
      )
  }


  return (
   <div className="min-h-screen bg-base-200 pt-10">
  <div className="w-full max-w-2xl px-4 mx-auto">

  
    <div className="flex items-center justify-between mb-6">
      <Link to="/" className="btn btn-ghost gap-2">
        <ArrowLeftIcon className="w-5 h-5" />
        Back to Notes
      </Link>

      <button
        onClick={handleDelete}
        className="btn btn-error btn-outline gap-2"
      >
        <Trash2Icon className="w-5 h-5" />
        Delete Note
      </button>
    </div>

  
    <div className="card bg-base-100 shadow-md">
      <div className="card-body space-y-4">


        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Note Title"
            className="input input-bordered w-full"
            value={note?.title || ""}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">Content:</span>
          </label>
          <textarea
            placeholder="Write your note here..."
            className="textarea textarea-bordered w-full min-h-45"
            value={note?.content || ""}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="btn btn-primary"
            disabled={saving}
            onClick={handleSave}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

  )
}

export default NoteDetailPage
