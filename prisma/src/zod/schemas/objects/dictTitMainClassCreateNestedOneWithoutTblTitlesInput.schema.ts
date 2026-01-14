import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutTblTitlesInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateNestedOneWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutTblTitlesInput>;
export const dictTitMainClassCreateNestedOneWithoutTblTitlesInputObjectZodSchema = makeSchema();
