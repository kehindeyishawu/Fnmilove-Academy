import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export let editorRef;


const TextEditor = ({ editorRef, imageUploadFunction, editerInitialValue = ""}) => {
    // editorRef = useRef(null);
    // getEditorContent = () => {
    //     if (editorRef.current) {
    //         return editorRef.current.getContent();
    //     }
    // };

    return (
        <>
            <Editor
                tinymceScriptSrc='/tinymce/tinymce.min.js'
                licenseKey='gpl'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={editerInitialValue}
                init={{
                    height: 500,
                    // menubar: false,
                    skin: "tinymce-5-dark",
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'accordion'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | image',
                    // statusbar: false,
                    branding: false,
                    promotion: false,
                    content_style: "",
                    content_css: "/app.min.css",
                    paste_block_drop: true,
                    images_reuse_filename: true,
                    images_upload_handler: imageUploadFunction,
                }}
            />
        </>
    )
}

export default TextEditor