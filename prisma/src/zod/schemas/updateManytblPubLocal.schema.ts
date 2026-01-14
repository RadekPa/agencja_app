import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalUpdateManyMutationInputObjectSchema as tblPubLocalUpdateManyMutationInputObjectSchema } from './objects/tblPubLocalUpdateManyMutationInput.schema';
import { tblPubLocalWhereInputObjectSchema as tblPubLocalWhereInputObjectSchema } from './objects/tblPubLocalWhereInput.schema';

export const tblPubLocalUpdateManySchema: z.ZodType<Prisma.tblPubLocalUpdateManyArgs> = z.object({ data: tblPubLocalUpdateManyMutationInputObjectSchema, where: tblPubLocalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPubLocalUpdateManyArgs>;

export const tblPubLocalUpdateManyZodSchema = z.object({ data: tblPubLocalUpdateManyMutationInputObjectSchema, where: tblPubLocalWhereInputObjectSchema.optional() }).strict();