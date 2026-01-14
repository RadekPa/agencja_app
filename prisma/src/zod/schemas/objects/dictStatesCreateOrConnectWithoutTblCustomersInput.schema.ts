import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesCreateWithoutTblCustomersInputObjectSchema as dictStatesCreateWithoutTblCustomersInputObjectSchema } from './dictStatesCreateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictStatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictStatesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateOrConnectWithoutTblCustomersInput>;
export const dictStatesCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
