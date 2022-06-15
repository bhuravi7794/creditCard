import Form from "@rjsf/core";
import {Card} from 'react-bootstrap';  
import './App.css';

const schema = {
    title: "",
    type: "object",
    required: ["cno", "valid", "chName", "cvv"],
    properties: {
        cno: { type: "string", title: "Card NO" },
        valid: { type: "string", title: "Valid Till" },
        chName: { type: "string", title: "Card Holder" },
        cvv: { type: "string", title: "CVV" }
    }
};

export default function AddCard(props) {
       const { id, cno, valid, chName, cvv } = props.editedData;
    const formData = {
        id: id ? id : null,
        cno: cno ? cno : null,
        valid: valid ? valid : null,
        chName: chName ? chName : null,
        cvv: cvv ? cvv : null
    }
    const submitData = (ele) => {
        props.updateData(ele.formData)
    }
    return (
        <div><button>Back</button>
            <Card className="addCard">
            <Form schema={schema} formData={formData} onSubmit={submitData} />
            </Card>
        </div>
    )
}