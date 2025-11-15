import { mockData } from '../data/apiMock.js';

// Configuration
const API_BASE = 'http://localhost:3000';
const USE_MOCK = true;

/**
 * Standardise les données de l'API pour unifier les schémas différents.
 * 
 * @param {Object} data - Les données brutes de l'API
 * @param {string} type - Le type de données ('user', 'activity', etc.)
 * @returns {Object} Les données standardisées
 */
const standardizeData = (data, type) => {
  if (type === 'user') {
    const userData = data.data;
    const standardized = {
      id: userData.id,
      userInfos: userData.userInfos || userData.infos,
      todayScore: userData.todayScore || userData.score,
      keyData: userData.keyData,
    };
    return standardized;
  }
  return data.data || data;
};

/**
 * Récupère les informations d'un utilisateur.
 * 
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<Object>} Les données utilisateur standardisées
 */
export const getUser = async (userId) => {
  if (USE_MOCK) {
    const data = mockData.user[userId];
    if (!data) throw new Error('Échec de récupération de l\'utilisateur !');
    return standardizeData(data, 'user');
  } else {
    const response = await fetch(`${API_BASE}/user/${userId}`);
    if (!response.ok) throw new Error('Échec de récupération de l\'utilisateur !');
    const data = await response.json();
    return standardizeData(data, 'user');
  }
};

/**
 * Récupère l'activité d'un utilisateur.
 * 
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<Object>} Les données d'activité
 */
export const getUserActivity = async (userId) => {
  if (USE_MOCK) {
    const data = mockData.activity[userId];
    if (!data) throw new Error('Échec de récupération de l\'activité !');
    return standardizeData(data, 'activity');
  } else {
    const response = await fetch(`${API_BASE}/user/${userId}/activity`);
    if (!response.ok) throw new Error('Échec de récupération de l\'activité !');
    const data = await response.json();
    return standardizeData(data, 'activity');
  }
};

/**
 * Récupère les sessions moyennes d'un utilisateur.
 * 
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<Object>} Les données des sessions moyennes
 */
export const getUserAverageSessions = async (userId) => {
  if (USE_MOCK) {
    const data = mockData.averageSessions[userId];
    if (!data) throw new Error('Échec de récupération des sessions moyennes !');
    return standardizeData(data, 'averageSessions');
  } else {
    const response = await fetch(`${API_BASE}/user/${userId}/average-sessions`);
    if (!response.ok) throw new Error('Échec de récupération des sessions moyennes !');
    const data = await response.json();
    return standardizeData(data, 'averageSessions');
  }
};

/**
 * Récupère les performances d'un utilisateur.
 * 
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Promise<Object>} Les données de performances
 */
export const getUserPerformance = async (userId) => {
  if (USE_MOCK) {
    const data = mockData.performance[userId];
    if (!data) throw new Error('Échec de récupération des performances !');
    return standardizeData(data, 'performance');
  } else {
    const response = await fetch(`${API_BASE}/user/${userId}/performance`);
    if (!response.ok) throw new Error('Échec de récupération des performances !');
    const data = await response.json();
    return standardizeData(data, 'performance');
  }
};
