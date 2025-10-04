import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useProjects } from "../../context/ProjectsContext";

function CreateProjectForm({ projectToEdit = {}, onCloseModal }) {
    const { isLoading } = useProjects();
    const { _id: editId, ...editValues } = projectToEdit;
    const isEditSession = Boolean(editId);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [screenshot, setScreenshot] = useState("");
    const [repoURL, setRepoURL] = useState("");
    const [liveURL, setLiveURL] = useState("");
    const [difficulty, setDifficulty] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // if (projectToEdit) {
        // } else {
        // }
    }

    return (
        <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
            <Heading as="h2">{isEditSession ? `Update Project ${editValues.title}` : "Create Project"}</Heading>

            <FormRow label="Title">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormRow>
            <FormRow label="Description">
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormRow>
            <FormRow label="difficulty">
                <Input value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
            </FormRow>
            <FormRow label="Repo URL">
                <Input value={repoURL} onChange={(e) => setRepoURL(e.target.value)} />
            </FormRow>
            <FormRow label="Live URL">
                <Input value={liveURL} onChange={(e) => setLiveURL(e.target.value)} />
            </FormRow>
            <FormRow label="Screenshot">
                <FileInput
                    accept="image/*"
                    type="file"
                    value={screenshot}
                    onChange={(e) => setScreenshot(e.target.value)}
                />
            </FormRow>

            <FormRow>
                <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
                    Cancel
                </Button>

                <Button disabled={isLoading}>{isEditSession ? "Edit Project" : "Create New Project"}</Button>
            </FormRow>
        </Form>
    );
}

export default CreateProjectForm;
