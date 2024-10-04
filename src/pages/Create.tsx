import { Container } from "react-bootstrap";
import { NoteData, Tag } from "../types";
import Form from "../components/Form";

export type CreateProps = {
  handleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const Create = ({
  handleSubmit,
  createTag,
  availableTags,
}: CreateProps) => {
  return (
    <Container className="py-5">
      <h2>Yeni Not Oluştur</h2>

      <Form
        handleSubmit={handleSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;