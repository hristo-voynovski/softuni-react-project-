const initState = {
    projects: [
        { id: '1', title: 'first entry', content: 'yadda yadda yadda' },
        { id: '2', title: 'second entry', content: 'yadda yadda yadda' },
        { id: '3', title: 'third entry', content: 'yadda yadda yadda' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
            
        default:
            return state;

    }

}

export default projectReducer;