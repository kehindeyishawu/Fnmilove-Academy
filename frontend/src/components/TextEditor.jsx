import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export let editorRef;


const TextEditor = ({editorRef, imageUploadFunction}) => {
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
                initialValue='<p>This is the initial content of the editor.</p>'
                init={{
                    height: 500,
                    // menubar: false,
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
                    // statusbar: false,
                    branding: false,
                    promotion: false,
                    content_css: "/TextEditor.css",
                    paste_block_drop: true,
                    images_reuse_filename: true,
                    images_upload_handler: imageUploadFunction,
                    // file_picker_types: 'image',
                    // file_picker_callback: function (cb, value, meta) {
                    //     const input = document.createElement('input');
                    //     input.setAttribute('type', 'file');
                    //     input.setAttribute('accept', 'image/*');

                    //     input.addEventListener('change', (e) => {
                    //         const file = e.target.files[0];

                    //         const reader = new FileReader();
                    //         reader.addEventListener('load', () => {
                    //             const id = 'blobid' + (new Date()).getTime();
                    //             const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                    //             const base64 = reader.result.split(',')[1];
                    //             const blobInfo = blobCache.create(id, file, base64);
                    //             blobCache.add(blobInfo);

                    //             /* call the callback and populate the Title field with the file name */
                    //             cb(blobInfo.blobUri(), { title: file.name });
                    //         });
                    //         reader.readAsDataURL(file);
                    //     });

                    //     input.click();
                    // },
                }}
            />
        </>
    )
}

export default TextEditor