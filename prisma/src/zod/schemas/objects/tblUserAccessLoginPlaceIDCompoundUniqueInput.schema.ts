import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string(),
  PlaceID: z.number().int()
}).strict();
export const tblUserAccessLoginPlaceIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblUserAccessLoginPlaceIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessLoginPlaceIDCompoundUniqueInput>;
export const tblUserAccessLoginPlaceIDCompoundUniqueInputObjectZodSchema = makeSchema();
