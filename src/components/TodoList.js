import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoList(){
  const list = [{"id":9870,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"}
                ,{"id":9874,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"},
                {"id":9910,"title":"new","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"},
                {"id":9914,"title":"new","description":"yuval_azani7","group":"45","when":"2019-09-21T12:30:35.620000Z"},
                {"id":9916,"title":"title","description":null,"group":"1","when":"2019-09-07T18:27:32.960000Z"},
                {"id":10119,"title":"title:0.38468893136429116","description":"description:0.8604495392622051","group":"group:test","when":"2020-12-02T20:57:10.292000Z"},
                {"id":9802,"title":"vsdvg sgg","description":"description 0.28810915079174815","group":"33","when":"2019-09-21T12:30:27.860000Z"}];
                
  function deleteButton(e){
    console.log(`${e.title} was deleted`);
  }              
                
  return(
    <ul className="list-group">
      {
        list.map(function(element){
          return(
            <li key={element.id} className="align-items-center list-group-item d-flex justify-content-between">
              {element.title}
              <IconButton aria-label="delete" className="btn btn-danger" onClick={ function() { deleteButton(element) } } >
                <DeleteIcon fontSize="small"/>                
              </IconButton>
            </li>
          )

        })
      }
    </ul>
  )
}