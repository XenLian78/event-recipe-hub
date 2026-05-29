import { type SchemaTypeDefinition } from 'sanity'
import { recipe } from './recipe'

export const schemaTypes = [
  recipe,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}