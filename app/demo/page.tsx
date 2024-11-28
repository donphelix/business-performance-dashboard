import {Mark, Stack} from "@chakra-ui/react"
import {Alert} from "@/components/ui/alert"
import React from "react";

const Demo = () => {
    return (
        <Stack gap="3">
            <Alert
                status="success"
                variant="subtle"
                title="Data uploaded to the server. Fire on!"
            />

            <Alert
                status="success"
                variant="solid"
                title="Data uploaded to the server. Fire on!"
            />

            <Alert
                status="success"
                variant="surface"
                title="Data uploaded to the server. Fire on!"
            />
        </Stack>
    )
}


export default Demo;