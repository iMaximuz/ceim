import config from '../helpers/config'
import axios from 'axios'
import { contentHeaders, authHeader } from '../helpers/request-headers';
import { unauthorizedHandler, getDataHandler } from './handlers';


function requestConfig() {
	return {
		baseUrl: config.apiUrl,
		headers: { ...contentHeaders(), ...authHeader() }
	};
}

export const cursoService = {
	getCursosAlumno() {
		return axios.get('/api/alumno/grupo', requestConfig())
			.then(getDataHandler)
			.catch(unauthorizedHandler)
	},
};