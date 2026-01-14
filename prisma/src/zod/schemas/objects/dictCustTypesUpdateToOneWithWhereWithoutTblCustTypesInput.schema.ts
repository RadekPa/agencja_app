import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './dictCustTypesWhereInput.schema';
import { dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUpdateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedUpdateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCustTypesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema)])
}).strict();
export const dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInput>;
export const dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInputObjectZodSchema = makeSchema();
