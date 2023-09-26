import { FC  } from 'react';
import CustomButton from './CustomButtom';

interface INoteItem {
  title: string;
}

const NoteItem: FC<INoteItem> = ({ title }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 space-y-4">
      <p className="font-semibold text-gray-700 text-lg">{ title || "timothy" }</p>
      <div className="space-x-5 mb-4">
        <CustomButton title="View" type="regular" />
        <CustomButton title="Edit" type="normal" />
        <CustomButton title="Delete" type="danger" />
      </div>
    </div>
  )
};

export default NoteItem;