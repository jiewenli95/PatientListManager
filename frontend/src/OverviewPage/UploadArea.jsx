import { Button, IconButton } from '@mui/material'

export default function UploadArea() {

    return (
        <div>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
            </IconButton>
        </div>
    )
}