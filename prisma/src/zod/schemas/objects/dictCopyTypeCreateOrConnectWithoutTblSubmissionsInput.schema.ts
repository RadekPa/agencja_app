import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema';
import { dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateOrConnectWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateOrConnectWithoutTblSubmissionsInput>;
export const dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
