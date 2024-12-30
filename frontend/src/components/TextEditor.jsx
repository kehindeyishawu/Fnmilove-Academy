import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import "./TextEditor.scss"

export let getEditorContent;

const TextEditor = () => {
    const editorRef = useRef(null);
    getEditorContent = () => {
        if (editorRef.current) {
            return editorRef.current.getContent();
        }
    };

    return (
        <>
            <Editor
                tinymceScriptSrc='/tinymce/tinymce.min.js'
                licenseKey='gpl'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue='<p>This is the initial content of the editor.</p>'
                init={{
                    height: 500,
                    // menubar: false,
                    promotion: false,
                    skin: "tinymce-5-dark",
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | image',
                    statusbar: false,
                    content_css: "/TextEditor.css"
                }}
            />
        </>
    )
}

export default TextEditor