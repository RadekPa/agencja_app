import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblAgreementsListRelationFilterObjectSchema as TblAgreementsListRelationFilterObjectSchema } from './TblAgreementsListRelationFilter.schema'

const dictcurrencieswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCurrenciesWhereInputObjectSchema), z.lazy(() => dictCurrenciesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCurrenciesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCurrenciesWhereInputObjectSchema), z.lazy(() => dictCurrenciesWhereInputObjectSchema).array()]).optional(),
  CurrID: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  CurrDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  tblAgreements: z.lazy(() => TblAgreementsListRelationFilterObjectSchema).optional()
}).strict();
export const dictCurrenciesWhereInputObjectSchema: z.ZodType<Prisma.dictCurrenciesWhereInput> = dictcurrencieswhereinputSchema as unknown as z.ZodType<Prisma.dictCurrenciesWhereInput>;
export const dictCurrenciesWhereInputObjectZodSchema = dictcurrencieswhereinputSchema;
