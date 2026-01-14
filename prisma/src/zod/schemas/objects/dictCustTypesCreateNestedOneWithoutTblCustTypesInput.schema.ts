import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateOrConnectWithoutTblCustTypesInput.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './dictCustTypesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCustTypesCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema).optional(),
  connect: z.lazy(() => dictCustTypesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesCreateNestedOneWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesCreateNestedOneWithoutTblCustTypesInput>;
export const dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectZodSchema = makeSchema();
