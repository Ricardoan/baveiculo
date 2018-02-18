/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.veiculo.bean;

import br.com.veiculo.entity.Auto;

import br.com.veiculo.dao.AutoDao;

import java.util.List;
import javax.faces.bean.*;


/**
 *
 * @author Ricardo
 */
@ManagedBean
@SessionScoped
public class Autobean {

    /**
     * Creates a new instance of Pessoasbean
     */
    private Auto aux= new Auto ();
    private AutoDao auxDao = new AutoDao();
    private List<Auto>  listarAuto;
    
    
    public Autobean() {
    }

    public Auto getAuto() {
        return aux;
    }
    //**************************************
    public void setAuto(Auto aux) {
        this.aux = aux;
    }
    
    //**************************************
   public List listarAuto(){
      listarAuto = auxDao.getList();
       return this.listarAuto;
   }
   
   
   
   //************************************** 
    public String adicionarAuto (){  // adicionar pessoas
        auxDao.addAuto(aux);
        
        aux.setMarca(null);
        aux.setTipo(null);
        aux.setVeiculo(null);
        
        return "index.xhtml";
    }
    
  
    //*************************************
    
    //***************************************
    
    @Override
    public int hashCode() {
        int hash = 5;
        hash = 79 * hash + (this.aux != null ? this.aux.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Autobean other = (Autobean) obj;
        if (this.aux != other.aux && (this.aux == null || !this.aux.equals(other.aux))) {
            return false;
        }
        return true;
    }
    
    
}
