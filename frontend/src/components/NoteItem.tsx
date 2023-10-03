import { FC } from 'react';
import CustomButton from './CustomButtom';

interface INoteItem {
  title: string;
  description?: string;
  onHideClick?(): void;
  onViewClick?(): void;
  onEditClick?(): void;
  onDeleteClick?(): void;
}

const NoteItem: FC<INoteItem> = ({ title, description, onHideClick, onViewClick, onEditClick, onDeleteClick }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 space-y-4">
      <p className="font-semibold text-gray-700 text-lg">{ title || "timothy" }</p>
      { description && <p className="ml-2 mt-2">{ description }</p> }
      <div className="space-x-5 mb-4">
        { description ? (
          <CustomButton onClick={onHideClick} title="Hide" type="regular" />
        ) : (
          <CustomButton onClick={onViewClick} title="View" type="regular" />
        )}
        <CustomButton onClick={onEditClick}   title="Edit" type="normal" />
        <CustomButton onClick={onDeleteClick} title="Delete" type="danger" />
      </div>
    </div>
  )
};

export default NoteItem;