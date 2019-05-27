import config from '../helpers/config'
import axios from 'axios'
import { unauthorizedHandler, getDataHandler, unprocessableEntityHandler } from './handlers';


export const grupoService = {
	getGrupoById(id) {
		return axios.get(`/api/alumno/grupo/${id}`, config.jsonRequestConfig())
			.then(getDataHandler)
			.catch(unauthorizedHandler)
			.catch(unprocessableEntityHandler)
	},
	getComentarios(grupo_id) {
		return axios.get(`/api/alumno/grupo/${grupo_id}/comentario`, config.jsonRequestConfig())
			.then(getDataHandler)
			.catch(unauthorizedHandler)
			.catch(unprocessableEntityHandler)
	},
	postComentario(grupo_id, comentario_data) {
		return axios.post(`/api/alumno/grupo/${grupo_id}/comentario`, comentario_data, config.fileRequestConfig())
			.then(getDataHandler)
			.catch(unauthorizedHandler)
			.catch(unprocessableEntityHandler)
	}
};