/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef }  from "react";
import JoditEditor from "jodit-react";
import { Jodit }   from "jodit";
import { string } from "yup";

interface IProps {
  placeholder   : string;
  value         : string;
  label         ?: string;
  require       ?: boolean;
  onEditorChange: (data: any) => void;
}
const config: Jodit["options"] = {
  ...Jodit.defaultOptions,
  uploader: {
    insertImageAsBase64URI: true,
  },
} as Jodit["options"];

const Editor = ({ placeholder, value,label,require, onEditorChange }: IProps) => {
  const editor = useRef(null);

  return (
    <div className="mb-3">
      {label && (
        <label className="mb-2">
          <strong>{label} {require && <span className="text-danger"> * </span>}</strong>
        </label>
      )}
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent) => onEditorChange(newContent)}
        onChange={(newContent) => onEditorChange(newContent)}
      />
    </div>
  );
};
export default Editor;
