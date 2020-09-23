import React from 'react';
import './product-editor.scss'

type ProductEditorProps = {
    onParse: (text: string) => void;
}

export default function ProductEditor(props: ProductEditorProps) {
    function handleOnChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        props.onParse(event.target.value);
    }

    return (
        <div className="product-editor">
            <textarea
                className='product-editor__textarea'
                placeholder="Enter products in following format: 'value, cost'"
                rows={5} cols={40}
                onChange={handleOnChange}
            >
            </textarea>
        </div>
    );
}