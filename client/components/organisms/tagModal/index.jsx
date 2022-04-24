import React, {useContext, useEffect, useState} from 'react'
import * as s from './styles'
import { TagContext } from '../../../pages/_app'
import { createTag } from '../../API'
import InputField from '../../atoms/inputField'
import { MainButton } from '../../atoms/mainButton'

export const TagModal = ({setModal}) => {
    const {tagData, setTagData} = useContext(TagContext)
    const [tagName, setTagName] = useState('')
    const [tagList, setTagList] = useState([])

    useEffect(() => {
        setTagList(tagData)
    }, [])

    async function postTag() {
        const {data} = await createTag({tagName})
    }

    function addTagToList(e) {
        e.preventDefault()
        postTag()
        setTagList([...tagList, {tagName}])
    }
  return (
    <s.Container >
<s.Overlay onClick={() => setModal(false)}></s.Overlay>
<s.Modal>
    <ul>
        {tagList.map((tag, index) => {
            return (<li key={index}>
                {tag.tagName}
            </li>)
        })}
    </ul>
    <form>
    <InputField type="text" placeholder="Tag..." id="tag" value={tagName} setValue={setTagName}></InputField>
    <MainButton fullWidth event={addTagToList}>Add tag</MainButton>
    </form>
    </s.Modal>
    </s.Container>
  )
}