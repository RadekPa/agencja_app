import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessLoginPlaceIDCompoundUniqueInputObjectSchema as tblUserAccessLoginPlaceIDCompoundUniqueInputObjectSchema } from './tblUserAccessLoginPlaceIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  Login_PlaceID: z.lazy(() => tblUserAccessLoginPlaceIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblUserAccessWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblUserAccessWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessWhereUniqueInput>;
export const tblUserAccessWhereUniqueInputObjectZodSchema = makeSchema();
