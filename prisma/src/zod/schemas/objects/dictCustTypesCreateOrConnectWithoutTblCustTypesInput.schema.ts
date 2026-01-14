import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './dictCustTypesWhereUniqueInput.schema';
import { dictCustTypesCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedCreateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCustTypesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCustTypesCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema)])
}).strict();
export const dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesCreateOrConnectWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesCreateOrConnectWithoutTblCustTypesInput>;
export const dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectZodSchema = makeSchema();
