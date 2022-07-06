import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'

import IconXCircle from '@/assets/icon-x-circle.svg'

const OptionsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const OptionItemContainer = styled.li`
  background-color: #F1F2F4;
  border-radius: 8px;
  list-style: none;
  margin: 0 0 0.75rem;
  min-height: 36px;
  padding: 1rem 4rem 1rem 1.25rem;
  position: relative;
`

const OptionInputItem = styled.input`
  border: none;
  background-color: #FFFFFF;
  color: #383B46;
  font-size: 1rem;
  padding: 0.25rem .5rem;
  width: 100%;
`

const ActionItem = styled.div`
  position: absolute;
  right: ${props => (props.right ? `${props.right}px` : '10px')};
  top: 50%;
  transform: translateY(-50%);
  cursor: ${props => (props.editing ? 'pointer' : 'move')};
`

const ActionItemDelete = styled.img`
  display: block;
  vertical-align: middle;
`

const DragHandle = SortableHandle(() => <ActionItem>:::</ActionItem>)

const SortableItem = SortableElement(
  ({ text, id, onToggleEdit, onKeyDown, onTextChange, onDelete, editing }) => (
    <OptionItemContainer
      key={id}
      onDoubleClick={() => !editing && onToggleEdit(id)}
      onBlur={() => onToggleEdit(id)}>
      {editing ? (
        <OptionInputItem
          autoFocus
          placeholder="Option label"
          value={text}
          onChange={e => onTextChange(e, id)}
          onKeyDown={onKeyDown}
        />
      ) : (
        text
      )}
      <ActionItem
        editing
        onClick={() => onDelete(id)}
        right={40}
        title="Delete">
        <ActionItemDelete src={IconXCircle.src} />
      </ActionItem>
      <DragHandle />
    </OptionItemContainer>
  ),
)

const SortableList = SortableContainer(({ options, ...props }) => {
  return (
    <OptionsContainer>
      {options.filter(Boolean).map((option, index) => {
        return (
          <SortableItem {...option} {...props} index={index} key={option.id} />
        )
      })}
    </OptionsContainer>
  )
})

const NewPoll = props => (
  <SortableList {...props} lockAxis="y" useDragHandle lockToContainerEdges />
)

NewPoll.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSortEnd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NewPoll