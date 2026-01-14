import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceUpdateManyMutationInputObjectSchema as tblAdvanceUpdateManyMutationInputObjectSchema } from './objects/tblAdvanceUpdateManyMutationInput.schema';
import { tblAdvanceWhereInputObjectSchema as tblAdvanceWhereInputObjectSchema } from './objects/tblAdvanceWhereInput.schema';

export const tblAdvanceUpdateManySchema: z.ZodType<Prisma.tblAdvanceUpdateManyArgs> = z.object({ data: tblAdvanceUpdateManyMutationInputObjectSchema, where: tblAdvanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAdvanceUpdateManyArgs>;

export const tblAdvanceUpdateManyZodSchema = z.object({ data: tblAdvanceUpdateManyMutationInputObjectSchema, where: tblAdvanceWhereInputObjectSchema.optional() }).strict();