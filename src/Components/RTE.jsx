import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { useTheme } from "../ThemeContext";

export default function RTE({name, control, label,defaultValue =""}) {
  const { theme } = useTheme();
  return (
    <div className='w-full'> 
    {label &&  <label className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
         key={theme} 
         
        initialValue={defaultValue}
        apiKey='zxb8q2tzm8gvnd8xkgxo6pm9to4jsfmlsughrx8aak17tjpu'
      init={{
        skin: theme === "dark" ? "oxide-dark" : "oxide",
        content_css: theme === "dark" ? "dark" : "default",
        plugins: [
         "image",
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
         toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
       
      }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  );
}