import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'
export default function({name, control,label,
    defaultValue = ""
}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1 text-black'>{label}</label>}
        <Controller name={name || "content"}
          control={control}
          render={({field : {onChange}}) => (
            <Editor
            apiKey='pkrp4h3cy1htkrxfv878g6wq0d9izn93damjz5qv6dd3982t'
            initialValue='default value'
            init={
                {branding: false,
                 height:500,
                 menubar:true,
                 Plugins:[                "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
        
                  ],
                 toolbar:   "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                 content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"

        
                }
            }
            onEditorChange={onChange}

            />
          )}
        />
    </div>
  )
}

