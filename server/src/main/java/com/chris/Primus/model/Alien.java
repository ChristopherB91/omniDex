package com.chris.Primus.model;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

//used to explicitly define column mappings to avoid unintended behavior
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//used to specify an auto-generated Id
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Aliens")
public class Alien {
	@Id
	@GeneratedValue
	private int id;
	
	@Column(name = "name", nullable = true)
	private String name;
	
	@Column(name = "nickname", nullable = false)
	private String nickname;
	
	@Column(name = "image", nullable = false)
	private String image;
	
	@Column(name = "silhouette", nullable = true)
	private String silhouette;
	
	@Column(name = "abilities", nullable = true)
	private String abilities;
	
	@Column(name = "ultimate", nullable = true)
	private String ultimate;
	
	public Alien() {}
	
	public Alien(int id, String name, String nickname, String image, String silhouette, List<String> abilities, String ultimate) {
		super();
		 this.id = id;
	        this.name = name;
	        this.nickname = nickname;
	        this.image = image;
	        this.silhouette = silhouette;
	        this.abilities = convertToJson(abilities);
	        this.ultimate = ultimate;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		if(name == "") {
			this.name = null;
		} else {			
			this.name = name;
		}
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getSilhouette() {
		return silhouette;
	}

	public void setSilhouette(String silhouette) {
		if(silhouette == "") {
			this.silhouette = null;
		} else {						
			this.silhouette = silhouette;
		}
	}

	public List<String> getAbilities() {
		return convertFromJson(abilities);
	}

	public void setAbilities(List<String> abilities) {
		this.abilities = convertToJson(abilities);
	}

	public String getUltimate() {
		return ultimate;
	}

	public void setUltimate(String ultimate) {
		if(ultimate == "") {
			this.ultimate = null;
		} else {			
			this.ultimate = ultimate;
		}
	}
	
	private String convertToJson(List<String> abilities) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(abilities);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error converting abilities to JSON", e);
        }
    }
	
	private List<String> convertFromJson(String abilities) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(abilities, List.class);
        } catch (IOException e) {
            throw new RuntimeException("Error converting JSON to abilities", e);
        }
    }
}
