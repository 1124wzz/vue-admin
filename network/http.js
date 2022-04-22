import axios from "axios";
import { Loading } from 'element-ui'

let loading;
function startLoading() {
  loading = Loading.service({

  })
}


module.exports = axios
