import { FileTextIcon } from "lucide-react";
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="bg-base-200 p-6 rounded-full mb-4 shadow-sm">
        <FileTextIcon className="size-10 text-primary" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">
        No notes found
      </h2>

      <p className="text-base-content/60 max-w-md">
        You don’t have any notes yet.  
        Start by creating your first note and keep your ideas organized 📝
      </p>
      <Link to={'/create'} className="btn btn-primary my-4">
      Create Your first Note!
      </Link>
    </div>
  );
};

export default NotesNotFound;
