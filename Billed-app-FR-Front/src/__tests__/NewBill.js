/**
 * @jest-environment jsdom
 */

import { screen, fireEvent, waitFor } from "@testing-library/dom" // Ajout fireEvent (déclenchement action sur DOM) & waitFor (Async)

import userEvent from '@testing-library/user-event'

import { ROUTES, ROUTES_PATH } from "../constants/routes" // ok
import router from "../app/Router" // ok
import { localStorageMock } from "../__mocks__/localStorage.js" //ok

import { bills } from "../fixtures/bills"
import { billsUI } from "../views/Bills.js"
import { NewBillUI } from "../views/NewBillUI.js"
import { NewBill } from "../containers/NewBill.js"

import mockStore from "../__mocks__/store"
import Store from "../app/Store.js"

// Récupération des données du store avec la fonction mock() de Jest
jest.mock('../app/store')

// Initialisation d'une nouvelle facture factice - Document
const newBill = {
  "id": "qcCK3SzECmaZAGRrHjaC",
  "status": "refused",
  "pct": 20,
  "amount": 200,
  "email": "a@a",
  "name": "test2",
  "vat": "40",
  "fileName": "preview-facture-free-201801-pdf-1.jpg",
  "date": "2002-02-02",
  "commentAdmin": "pas la bonne facture",
  "commentary": "test2",
  "type": "Restaurants et bars",
  "fileUrl": "https://test.storage.tld/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=4df6ed2c-12c8-42a2-b013-346c1346f732"
}
// Initialisation du onNavigate
const onNavigate = (path) => { screen.innerHTML = path }

// localStorage - modification de l'objet window avec la méthode defineProperties
Object.defineProperties(window, 'localStorage', {
  value: localStorageMock
})
// utilisation de l'accesseur setitem de la fonction localStorageMock
window.localStorage.setItem('user',  JSON.stringify({ type: 'Employee'}))

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then ...", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
    })
  })

  describe("When I want to upload a proof", () => {
    test("Then the file must have the good extension", () => {
      // AFFICHAGE USER INTERFACE - NOUVELLE FACTURE - NewBillUI()
      const html = NewBillUI()
      screen.innerHTML = html

      
    })
  })
})
