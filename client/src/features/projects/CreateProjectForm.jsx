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
    const { isLoading, updateProject, createProject } = useProjects();
    const { _id: editId, ...editValues } = projectToEdit;
    const isEditSession = Boolean(editId);

    const [title, setTitle] = useState(isEditSession ? editValues.title : "");
    const [description, setDescription] = useState(isEditSession ? editValues.description : "");
    // const [screenshot, setScreenshot] = useState(isEditSession ? editValues.screenshot : "");
    const [screenshot, setScreenshot] = useState(null);
    const [repoURL, setRepoURL] = useState(isEditSession ? editValues.repoURL : "");
    const [liveURL, setLiveURL] = useState(isEditSession ? editValues.liveURL : "");
    const [difficulty, setDifficulty] = useState(isEditSession ? editValues.difficulty : "");

    function handleSubmit(e) {
        e.preventDefault();

        if (isEditSession) {
            updateProject();
        } else {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("screenshot", screenshot);
            formData.append("repoURL", repoURL);
            formData.append("liveURL", liveURL);
            formData.append("difficulty", difficulty);

            createProject(formData);
        }
    }

    return (
        <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
            <Heading as="h2">{isEditSession ? `Update Project ${editValues.title}` : "Create Project"}</Heading>

            <FormRow label="Title">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" />
            </FormRow>
            <FormRow label="Description">
                <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                />
            </FormRow>
            <FormRow label="difficulty">
                <Input
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    type="number"
                    name="difficulty"
                    id="difficulty"
                />
            </FormRow>
            <FormRow label="Repo URL">
                <Input value={repoURL} onChange={(e) => setRepoURL(e.target.value)} name="repoURL" id="repoURL" />
            </FormRow>
            <FormRow label="Live URL">
                <Input value={liveURL} onChange={(e) => setLiveURL(e.target.value)} name="liveURL" id="liveURL" />
            </FormRow>
            <FormRow label="Screenshot">
                <FileInput
                    accept="image/*"
                    type="file"
                    onChange={(e) => setScreenshot(e.target.files[0])}
                    name="screenshot"
                    id="screenshot"
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
