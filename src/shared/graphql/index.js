import { gql } from 'graphql-tag';
import { graphql } from 'react-apollo';

import { isValidString } from '@cobuildlab/validation-utils';

const TASK_LIST_QUERY = gql`
  query TaskList {
    tasksList(orderBy: [completed_ASC, createdAt_DESC]) {
      count
      items {
        id
        name
        completed
        createdAt
      }
    }
  }
`;

const TASK_CREATE_MUTATION = gql`
  mutation TaskCreate($data: TaskCreateInput!) {
    taskCreate(data: $data) {
      id
      name
      completed
      createdAt
    }
  }
`;

const TASK_UPDATE_MUTATION = gql`
  mutation TaskUpdate($id: ID!, $name: String!) {
    taskUpdate(data: { id: $id, name: $name }) {
      id
      name
      completed
      createdAt
    }
  }
`;

const TASK_DELETE_MUTATION = gql`
  mutation TodoDelete($id: ID!) {
    taskDelete(filter: { id: $id }) {
      success
    }
  }
`;

const TOGGLE_COMPLETED_MUTATION = gql`
  mutation ToggleCompleted($id: ID!, $completed: Boolean!) {
    toggleCompleted(id: $id, completed: $completed) {
      success
    }
  }
`;

export const withTasks = graphql(TASK_LIST_QUERY, {
  props: ({ data: { tasksList } }) => ({
    count: tasksList?.count || 0,
    tasks: tasksList?.items || [],
  }),
});

export const withCreateTask = graphql(TASK_CREATE_MUTATION, {
  props: ({ mutate }) => ({
    createTask: ({ name }) => {
      mutate({
        variables: { data: { name, completed: false } },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

export const withUpdateTask = graphql(TASK_UPDATE_MUTATION, {
  props: ({ mutate }) => ({
    updateTask: ({ id }) => {
      const newName = window.prompt('Enter a new name for the task');

      if (!isValidString(newName)) {
        alert('Invalid name provided');
        return;
      }

      mutate({
        variables: { id, name: newName },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

export const withDeleteTask = graphql(TASK_DELETE_MUTATION, {
  props: ({ mutate }) => ({
    deleteTask: (id) => {
      const shouldDelete = window.confirm(
        'Are you sure you want to delete this task?',
      );

      if (shouldDelete) {
        mutate({
          variables: { id },
          refetchQueries: [{ query: TASK_LIST_QUERY }],
        });
      }
    },
  }),
});

export const withToggleCompletedTask = graphql(TOGGLE_COMPLETED_MUTATION, {
  props: ({ mutate }) => ({
    toggleCompletedTask: ({ id, completed }) => {
      mutate({
        variables: { id, completed },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});
