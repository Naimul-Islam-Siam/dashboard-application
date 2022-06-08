import React from "react";
import { RichTextEditorComponent, HtmlEditor, Image, Link, Toolbar, QuickToolbar, Inject } from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white">
         <Header category="App" title="Editor" />
         <RichTextEditorComponent>
            <EditorData />
            <Inject services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]} />
         </RichTextEditorComponent>
      </div>
   );
};

export default Editor;