import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './objects/tblAgreementsWhereInput.schema';

export const tblAgreementsDeleteManySchema: z.ZodType<Prisma.tblAgreementsDeleteManyArgs> = z.object({ where: tblAgreementsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgreementsDeleteManyArgs>;

export const tblAgreementsDeleteManyZodSchema = z.object({ where: tblAgreementsWhereInputObjectSchema.optional() }).strict();