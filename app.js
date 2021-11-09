const app = new Vue({
  el: '#app',
  data:{
    titulo:'Usuario CRUD',
    editar: false,
    cargando: false,
    usuarios: [],
    usuarioActual: {}
  },
  methods:{
    async cargarDatos(){
      const res = await fetch(`http://localhost:5000/api/usuario/`,{
        method:'GET'
      });
      const datos = await res.json();
      this.usuarios = datos.data;
    },
    async procesar(){
      try {
        if (this.editar) {
          this.cargando = true;
          await fetch(`http://localhost:5000/api/usuario/${this.usuarioActual._id}`,{
            method:'PATCH',
            body: JSON.stringify(this.usuarioActual),
            headers:{
              'Content-Type': 'application/json'
            }
          });
          this.cargando = false;
          this.usuarios = this.usuarios.map(i => i._id === this.usuarioActual._id ? this.usuarioActual:i);
          this.usuarioActual = {};
          this.editar = false;
        }else{
          this.cargando = true;
          await fetch(`http://localhost:5000/api/usuario/`,{
            method:'POST',
            body: JSON.stringify(this.usuarioActual),
            headers:{
              'Content-Type': 'application/json'
            }
          });
          this.cargando = false;
          this.usuarios.push(this.usuarioActual);
          this.usuarioActual = {};
        }        
      } catch (error) {
        this.cargando = false;
        console.log(error);
      }
    },
    async eliminar(item){
      try {
        const respuesta = confirm(`Esta seguro de eliminar a ${item.nombre}`)
        if (respuesta) {
          await fetch(`http://localhost:5000/api/usuario/${item._id}`,{
                method:'DELETE',
                headers:{
                  'Content-Type': 'application/json'
                }
              });
          this.usuarios = this.usuarios.filter(i => i._id !== item._id);             
        }
      } catch (error) {
        console.log(error);
      }
    },
    editarUsuario(item){
      this.editar = true;
      this.usuarioActual = {...item};
    }
  },
  computed:{
    tituloForm(){
      return this.editar ? 'Editar Usario':'Agregar usuario';
    }
  },
  async created(){
    await this.cargarDatos();
  }
})