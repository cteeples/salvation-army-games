import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react'

export default function EditForm() {
    return(
        <Form >
        <Form.Group id="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={5}  required />
        </Form.Group>
        <Button type="submit" className="w-25">Add Comment</Button>
        </Form>
    ) 
}