import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";

function CreateProjectForm({ projectToEdit = {}, onCloseModal }) {
    const { _id: editId, ...editValues } = projectToEdit;
    const isEditSession = Boolean(editId);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {}

    return (
        <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
            <Heading as="h2">{isEditSession ? `Update Project ${editValues.title}` : "Create Project"}</Heading>

            <FormRow>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormRow>
            <FormRow>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormRow>
        </Form>
    );
}

export default CreateProjectForm;
