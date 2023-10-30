import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

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

  // Définir la relation One-to-Many avec la table Product
  @OneToMany(() => Product, (product) => product.user) // Produit changé en Product et 'utilisateur' en 'user'
  products: Product[]; // produits a été changé en products
}
