import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './objects/tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './objects/tblAgreementsWhereInput.schema';

export const tblAgreementsUpdateManySchema: z.ZodType<Prisma.tblAgreementsUpdateManyArgs> = z.object({ data: tblAgreementsUpdateManyMutationInputObjectSchema, where: tblAgreementsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyArgs>;

export const tblAgreementsUpdateManyZodSchema = z.object({ data: tblAgreementsUpdateManyMutationInputObjectSchema, where: tblAgreementsWhereInputObjectSchema.optional() }).strict();