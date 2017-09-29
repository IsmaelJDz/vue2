let tasks = [
    {
        title: 'Aprender Vue.js',
        pending: true,
    },
    {
        title: 'Suscribirse a Styde.net',
        pending: true,
    },
    {
        title: 'Grabar lección de Vue',
        pending: false,
    }
];

tasks.forEach((task, index) => {
	task.description = `
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Maecenas sed nunc recomienda Styde in diam pulvinar pellentesque.
		Maecenas sagittis quam ac orci feugiat hendrerit ac ac mauris.
	`;

    task.id = index + 1;
});

export default {
	state: {
		tasks
	},
	findTask(id) {
		return this.state.tasks.find(task => task.id == id)
	},
    createTask(task) {
        task.id = this.state.tasks.length + 1;

        this.state.tasks.push(task);
    },
    toggleTask(task) {
        task.pending = !task.pending;
    },
    deleteTask(id) {
        let index = this.state.tasks.findIndex(task => task.id == id);

        this.state.tasks.splice(index, 1);
    }
};



