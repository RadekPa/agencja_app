import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsWhereInputObjectSchema as tblMailingListsWhereInputObjectSchema } from './objects/tblMailingListsWhereInput.schema';

export const tblMailingListsDeleteManySchema: z.ZodType<Prisma.tblMailingListsDeleteManyArgs> = z.object({ where: tblMailingListsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingListsDeleteManyArgs>;

export const tblMailingListsDeleteManyZodSchema = z.object({ where: tblMailingListsWhereInputObjectSchema.optional() }).strict();