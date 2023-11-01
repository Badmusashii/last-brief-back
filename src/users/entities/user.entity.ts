import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('users') // Le nom de la table en base de données
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstname: string; // Changer 'nom' en 'firstname'

  @Column({ length: 255 })
  lastname: string; // Changer 'prenom' en 'lastname'

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 60 })
  password: string;
}
