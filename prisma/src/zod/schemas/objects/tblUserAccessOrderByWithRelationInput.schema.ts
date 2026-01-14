import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblPlacesOrderByWithRelationInputObjectSchema as tblPlacesOrderByWithRelationInputObjectSchema } from './tblPlacesOrderByWithRelationInput.schema';
import { tblUsersOrderByWithRelationInputObjectSchema as tblUsersOrderByWithRelationInputObjectSchema } from './tblUsersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  PlaceID: SortOrderSchema.optional(),
  tblPlaces: z.lazy(() => tblPlacesOrderByWithRelationInputObjectSchema).optional(),
  tblUsers: z.lazy(() => tblUsersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblUserAccessOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblUserAccessOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessOrderByWithRelationInput>;
export const tblUserAccessOrderByWithRelationInputObjectZodSchema = makeSchema();
