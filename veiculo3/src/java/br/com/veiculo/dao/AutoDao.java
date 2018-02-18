/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.veiculo.dao;

import org.hibernate.Session;
import org.hibernate.Transaction;

import br.com.veiculo.util.HibernateUtil;
import java.util.List;
import org.hibernate.Criteria;
import br.com.veiculo.entity.Auto;

/**
 *
 * @author Ricardo
 * Observações: Toda operação de listagem , remoção, inclusão no banco é feita na classe Dao
 */
public class AutoDao { // Classe que faz a comunicação com o banco
    private Session sessao;
    private Transaction trans;
    private List<Auto> list; 

    
    public List<Auto> getList() { // metodo que retorna a lista
        sessao = HibernateUtil.getSessionFactory().openSession(); // abre a sessão
        trans = sessao.beginTransaction();
        
        Criteria cri = sessao.createCriteria(Auto.class); // pesquisar criteria
        this.list = cri.list(); 
        return list;
    }
    
   
    public void addAuto(Auto p) { // adicionar pessoas no hibernat
        try{    
        sessao = HibernateUtil.getSessionFactory().openSession(); // abre a sessão
        trans = sessao.beginTransaction();
        // pegando os atributos da classe pessoa
        Auto aux = new Auto ();
       
        aux.setMarca(p.getMarca());
        aux.setTipo(p.getTipo());
        aux.setVeiculo(p.getVeiculo());
                               
        sessao.save(aux); // comomando para salvar no hibernat
        trans.commit(); // confirmação da gravação, grava no banco de dados
        
        } catch (Exception e){
            e.printStackTrace();
        
        } finally{
            sessao.close();
        } 
    
    }  
    
   
     
    

    
}
